import React, { useState, useEffect } from "react";
import axios from 'axios';
import { GAS_URL } from "../credentials.js";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import { Input } from "@material-ui/core";

const stageUrl = `https://jirei-seido-api.mirasapo-plus.go.jp/categories/stages`;
const prefectureUrl = "https://jirei-seido-api.mirasapo-plus.go.jp/prefectures";
const industryUrl = "https://jirei-seido-api.mirasapo-plus.go.jp/categories/industries";

const GASUrl = 'https://script.google.com/macros/s/AKfycbyOPLJJH0SDJabJ8ABUCeYFgVWRT5126k1MN0JSOdroHI-zh5dsGUQB8lsE7rI48RCHlQ/exec';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }));

const useButtonStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
// ------------------フォームコンポーネント----------------
export const Form = ({
    onClickChangeButton,
    contentId,
}) => {
    const info = localStorage.getItem("info");
    const localInput = info ? JSON.parse(info) : console.log("error: localstrage is null");

    const classes = useStyles();
    const buttonClasses = useButtonStyles();
    const [input, setInput] = useState(localInput);
    const initialStageList = [];
    const [stageList, setStageList] = useState([]);
    const initialPrefectureList = [];
    const [prefectureList, setPrefectureList] = useState([]);
    const initialIndustryList = [];
    const [industryList, setindustryList] = useState([]);
    useEffect(() => {
        axios.get(stageUrl)
        .then(res => {
            setStageList(res.data);
        });
        axios.get(prefectureUrl)
        .then(res => {
            setPrefectureList(res.data);
        });
        axios.get(industryUrl)
        .then(res => {
            setindustryList(res.data);
            console.log(industryList);
        });
    }, []);
    // -----------------------フォームの保存用処理---------------------------
    const saveUserInfo = () => {
        localStorage.setItem("info", JSON.stringify(input)); // localStrageにjsonとして保存
    }
    const submit = (e) => {
        if (e.key === 'Enter') {
            saveUserInfo();
            return;
        }
    }
    const changeInput1 = (e) => {
        setInput({
            ...input,
            prefecture: e.target.value
        });
    }

    function buttonClick(){
      saveUserInfo()
    }

    function postData(){
        axios.post(GASUrl, JSON.stringify(input))
        .then(response => {
          console.log("送信結果:",response.data)
        })
        .finally(() => {
            onClickChangeButton();
        });
    }


    /*
    const info = localStorage.getItem("info");
    const localInput = info ? JSON.parse(info) : {
        prefecture: "",
    }
    */
    let index = 0;
    // --------------------------レンダリング----------------------------
    return(
        <>
        <div>
        <br/>
        </div>
        <div className="form-header">
            <p>設定</p>
        </div>
            <div className="form-container">
                <form className={classes.root} noValidate autoComplete="off">
                    <p>メールアドレス<span className="required">必須</span></p>
                    <input type="email" id="email" style={{color: "", backgroundColor: "white" , margin: 7}} value={input.email} 
                    onChange={()=> {
                      setInput({
                        ...input,
                        email: document.getElementById("email").value
                      });
                    }}
                    />
                  
                </form>
                <div>
                    <p>会社の地域<span className="required">必須</span></p>
                    <FormControl className={classes.formControl} style={{ color: "", backgroundColor: "white" }}>
                    {/*<InputLabel htmlFor="grouped-select">{`会社の地域 (現在: ${localInput.prefecture})`}</InputLabel>*/}
                    <Select defaultValue="" id="grouped-select" displayEmpty>
                        <MenuItem value="">
                        <em>{input.prefecture.name}</em>
                        </MenuItem>
                        {prefectureList.map(prefecture => (
                            <MenuItem
                            onClick={() => {
                                setInput({
                                    ...input,
                                    prefecture: {id: prefecture.id, name: prefecture.name}
                                });
                            }}
                            value={prefecture.name}
                            >{prefecture.name}</MenuItem>
                        ))
                        }
                    </Select>
                    </FormControl>
                </div>
                <div>
                    <p>事業ステージ<span className="required">必須</span></p>
                    <FormControl className={classes.formControl} style={{ color: "", backgroundColor: "white" }}>
                    {/*<InputLabel htmlFor="grouped-select">{`事業ステージ (現在: ${localInput.stage.name})`}</InputLabel>*/}
                    <Select defaultValue="" id="grouped-select" displayEmpty>
                        <MenuItem
                        value="">
                        <em>{input.stage.name}</em>
                        </MenuItem>
                        {stageList.map(stage => (
                            <MenuItem
                            value={stage.name}
                            onClick={() => {
                                setInput({
                                    ...input,
                                    stage: {id: stage.id, name: stage.name}
                                });
                            }}
                            >{stage.name}</MenuItem>
                        ))
                        }
                    </Select>
                    </FormControl>
                </div>
                <div>
                    <p>業種<span className="required">必須</span></p>
                    <FormControl className={classes.formControl} style={{ color: "", backgroundColor: "white" }}>
                    {/*<InputLabel htmlFor="grouped-select">{`会社の地域 (現在: ${localInput.industry.name})`}</InputLabel>*/}
                    <Select defaultValue="" id="grouped-select" displayEmpty>
                        <MenuItem value="">
                        <em>{input.industry.name}</em>
                        </MenuItem>
                        {industryList.map(industry => (
                            <MenuItem
                            value={industry.name}
                            onClick={() => {
                                setInput({
                                    ...input,
                                    industry: {id: industry.id, name: industry.name}
                                });
                            }}
                            >{industry.name}</MenuItem>
                        ))
                        }
                    </Select>
                    </FormControl>
                </div>
            </div>
            <div className="form-footer">
                <div>
                <Button
                    type = "submit"
                    name="action"
                    value={JSON.stringify(input)}
                    variant="contained"
                    color="primary"
                    className={buttonClasses.button}
                    id="btn"
                    onClick={() => {saveUserInfo();postData()}}
                    endIcon={<CloudUploadIcon></CloudUploadIcon>}
                    disabled={!input.email}
                >
                    条件を変更
                </Button>
                </div>
            </div>
        </>
    )
}

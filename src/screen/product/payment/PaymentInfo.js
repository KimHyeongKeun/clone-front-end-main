import './PaymentInfo.css';
import * as React from 'react';
import {Box, Radio, RadioGroup, Sheet, Input, Checkbox} from "@mui/joy";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react";

function PaymentMethod(props) {

    const onPMChanged = (e) => {
        props.setPaymentMethod(e.target.value);
    };

    return (
        <Box sx={{ width: 500, marginBottom: 3 }}>
            <RadioGroup
                defaultValue="card"
                size="sm"
                sx={{ justifyContent: 'space-around'}}
                orientation="horizontal"
            >
                {[{value:'card', label:'신용카드'}, {value:'vbank', label:'가상계좌'}].map((element) => (
                    <Sheet
                        key={element.value}
                        sx={{
                            width: 130,
                            textAlign: 'center',
                            fontSize: 11,
                            p: 0.5,
                            borderRadius: 'sm',
                            boxShadow: 'sm',
                            bgcolor: 'background.body',
                        }}
                    >
                        <Radio
                            label={element.label}
                            overlay
                            disableIcon
                            value={element.value}
                            onChange={onPMChanged}
                            slotProps={{
                                label: ({ checked }) => ({
                                    sx: {
                                        fontWeight: 'md',
                                        fontSize: 'sm',
                                        color: checked ? 'text.primary' : 'text.secondary',
                                    },
                                }),
                                action: ({ checked }) => ({
                                    sx: (theme) => ({
                                        ...(checked && {
                                            '--variant-borderWidth': '2px',
                                            '&&': {
                                                // && to increase the specificity to win the base :hover styles
                                                borderColor: theme.vars.palette.primary[500],
                                            },
                                        }),
                                    }),
                                }),
                            }}
                        />
                    </Sheet>
                ))}
            </RadioGroup>
        </Box>
    );
}

function VBankContent(props) {
    const vBankList = [
        {
            value: 'vbank_hana',
            label: '(예시) 하나은행 25691006208604 블룸즈베리랩'
        },
    ];

    const onAccountChange = (e, value) => {
        props.setVBankAccount(value);
    };

    const onDepositorChange = (e) => {
        props.setDepositorName(e.target.value);
    };

    return(
        <div>
            <Select
                indicator={<KeyboardArrowDown />}
                sx={{
                    width: 400,
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                    fontSize: 13,
                    minHeight: '34px',
                }}
                onChange={onAccountChange}
                defaultValue={vBankList[0].value}
            >
                {vBankList.map((vBank) => (
                    <Option
                        key={vBank.value}
                        value={vBank.value}
                        sx={{
                            fontSize: 12,
                        }}
                    >{vBank.label}</Option>
                ))}
            </Select>

            <Box
                sx={{
                    width: 400,
                    py: 2,
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                <Input
                    sx={{
                        fontSize: 12,
                        minHeight: '34px',
                        "--Input-focusedThickness": "1px",
                    }}
                    onChange={onDepositorChange}
                    placeholder="입금자명 (미입력시 주문자명)" variant="outlined" color="neutral" />
            </Box>

            <Box>
                <Checkbox
                    sx={{
                        fontSize: 11,
                    }}
                    label="현금영수증 신청" size="sm" variant="soft" />
            </Box>
        </div>
    );
}

export default function PaymentInfo(props) {
    const { PM_CARD, PM_VBANK, defaultVBankAccount, defaultDepositorName } = props.constants

    const [pm, setPm] = useState({pm: PM_CARD});

    const setPaymentMethod = (newPaymentMethod) => {
        props.setPayment((prevState) => {
            return {...prevState, paymentMethod: newPaymentMethod}
        });
        setPm(newPaymentMethod);

        if (newPaymentMethod === PM_CARD) {
            setVBankAccount(defaultVBankAccount);
            setDepositorName(defaultDepositorName);
        }
    }

    const setVBankAccount = (newAccount) => {
        props.setPayment((prevState) => {
            return {...prevState, vBankAccount: newAccount}
        });
    }

    const setDepositorName = (newDepositor) => {
        props.setPayment((prevState) => {
            return {...prevState, depositorName: newDepositor}
        });
    }

    return (
        <div className="confirm-info">
            <div className="title">결제 수단</div>
            <div className="content">
                <div className="payment-info">
                    <PaymentMethod setPaymentMethod={setPaymentMethod} />
                    {pm === PM_VBANK &&
                        <VBankContent
                            setVBankAccount={setVBankAccount}
                            setDepositorName={setDepositorName}
                        />
                    }
                </div>
            </div>
        </div>
    );
}
import type { Nodes } from "@/types";
import { ModeType } from "@/types";
import { DefaultNodes, BackNodes, ResetNodes, OnNodes, OffNodes } from '../../_utilities';
import SpeedrunTimerNodes from './_speedrun-timer-nodes';
import MessageNodes from './_message-nodes';
import ColorNodes from '../_color/color-nodes';
import LocationNodes from '../_location/location-nodes';
const DefaultNodesEnum = new DefaultNodes();
const BackNodesEnum = new BackNodes();
const OffNodesEnum = new OffNodes();
const ResetNodesEnum = new ResetNodes();
const SpeedrunTimerNodesEnum = new SpeedrunTimerNodes();
const MessageNodesEnum = new MessageNodes();
const ColorNodesEnum = new ColorNodes();
const LocationNodesEnum = new LocationNodes();

export default class MessageTimersNodes extends DefaultNodes implements Nodes {
    key = "MessageTimers";
    selected = OffNodesEnum.selected;
    result = OffNodesEnum.result;
    displayValue = true;
    size = 10;
    mode = ModeType.button;
    language = {
        German: "Nachricht-Zeitgeber",
        SimplifiedChinese: "消息定时器",
        TraditionalChinese: "消息定時器",
        English: "Message Timers",
        Español: "Temporizadores de mensajes",
        French: "Messages minuteurs",
        Italian: "Timer dei messaggi",
        Japanese: "メッセージタイマー",
        Nederlands: "Bericht-timers",
        BrazilianPortuguese: "Temporizadores de mensagem",
        Russian: "Таймеры с сообщениями"
    };
    nodes = [
        {
            ...JSON.parse(JSON.stringify(OffNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(SpeedrunTimerNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "CountdownTimer",
            selected: SpeedrunTimerNodesEnum.selected,
            result: SpeedrunTimerNodesEnum.result,
            parents: this.key,
            mode: ModeType.verticalRange,
            language: {
                German: "Countdown",
                SimplifiedChinese: "倒计时计时器",
                TraditionalChinese: "倒數計時器",
                English: "Countdown Timer",
                Español: "Temporizador de cuenta atrás",
                French: "Compte à rebours",
                Italian: "Timer conto alla rovescia",
                Japanese: "カウントダウン タイマー",
                Nederlands: "Afteltimer",
                BrazilianPortuguese: "Temporizador decrescente",
                Russian: "Таймер обратного отсчета"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "StartStop",
            selected: "Start / Stop",
            result: "Start / Stop",
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Start / Stop",
                SimplifiedChinese: "开始/结束",
                TraditionalChinese: "開始 / 停止",
                English: "Start / Stop",
                Español: "Iniciar / Parar",
                French: "Commencer / Arrêter",
                Italian: "Avvia / Arresta",
                Japanese: "スタート / ストップ",
                Nederlands: "Starten / stoppen",
                BrazilianPortuguese: "Iniciar / parar",
                Russian: "Пуск / стоп"
            }
        },
        {
            ...JSON.parse(JSON.stringify(DefaultNodesEnum)),
            key: "ResetTimer",
            selected: "Reset Timer",
            result: "Reset Timer",
            parents: this.key,
            mode: ModeType.button,
            language: {
                German: "Timer zurücksetzen",
                SimplifiedChinese: "重置计时器",
                TraditionalChinese: "重設計時器",
                English: "Reset Timer",
                Español: "Resetear temporizador",
                French: "Réinitialisez la minuterie",
                Italian: "Timer di reset",
                Japanese: "タイマーのリセット",
                Nederlands: "Timer opnieuw instellen",
                BrazilianPortuguese: "Repor temporizador",
                Russian: "Сбросить таймер"
            }
        },
        {
            ...JSON.parse(JSON.stringify(MessageNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ColorNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(LocationNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(ResetNodesEnum)),
            parents: this.key
        },
        {
            ...JSON.parse(JSON.stringify(BackNodesEnum)),
            parents: this.key
        }
    ];
};
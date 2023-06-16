import { creatStore } from "./core.js";
import reducer from "./reducer.js";
import withlogger from "./logger.js"

const {attach, connect, dispatch} = creatStore(withlogger(reducer))

window.dispatch = dispatch

export{
    attach,
    connect
}
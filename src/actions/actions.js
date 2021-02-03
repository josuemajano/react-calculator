import { UPDATE } from "./actionTypes";
import { ADD } from "./actionTypes";
import { SUBTRACT } from "./actionTypes";
import { MULTIPLY } from "./actionTypes";
import { DIVIDE } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { EQUALS } from "./actionTypes";

export const updateDisplay = content => ({
    type: UPDATE,
    payload: {
        input: content,
        operation: "num"
    }
})

export const adding = content => ({
    type: ADD,
    payload: {
        operation: "operator"
    }
})

export const subtracting = content => ({
    type: SUBTRACT,
    payload: {
        operation: "operator"
    }
})

export const multipling = content => ({
    type: MULTIPLY,
    payload: {
        operation: "operator"
    }
})

export const dividing = content => ({
    type: DIVIDE,
    payload: {
        operation: "operator"
    }
})

export const clearDisplay = content => ({
    type: CLEAR,
    payload: {
        operation: "clear"
    }
})

export const equals = content => ({
    type: EQUALS,
    payload: {
        operation: "equals"
    }
})
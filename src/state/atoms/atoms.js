import { atom } from "recoil";


export const jdList = atom({
    key:'jdList',
    default: []
})

export const filterRole = atom({
    key:'filterRole',
    default: []
})

export const filterExp = atom({
    key:'filterExp',
    default: null
})


export const filterLocation = atom({
    key:'filterLocation',
    default: []
})


export const filterSalary = atom({
    key:'filterSalary',
    default: 0
})


export const filterCompany = atom({
    key:'filterCompany',
    default: ""
})
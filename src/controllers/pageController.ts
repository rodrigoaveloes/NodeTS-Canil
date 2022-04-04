import { Request, Response } from "express";

export const home = (req:Request, res: Response) => {

    res.send('home do controller!')

}

export const dogs = (req:Request, res: Response) => {
    res.send('dogs do controller!')

}

export const cats = (req:Request, res: Response) => {
    res.send('cats do controller!')

}
export const fishes = (req:Request, res: Response) => {

    res.send('fishes do controller!')
}
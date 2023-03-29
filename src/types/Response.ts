import { Dispatch, SetStateAction } from "react";

export type Response<T> = [T, Dispatch<SetStateAction<T>>];
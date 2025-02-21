import { Express } from 'express';
import express from 'express'
import task from './task.ts'
import auth from './auth.ts'

export default function (app: Express) {
    app
    .use(express.json())
    .use('/task', task)
    .use('/auth', auth)
}
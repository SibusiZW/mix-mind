'use server';

import { OpenRouter } from '@openrouter/sdk';

const client = new OpenRouter({ apiKey: process.env.OPENROUTER_API_KEY! })

const model = 'google/gemma-4-26b-a4b-it';

export async function generateDraft(baseIdea: string, details: string) {
    try {
        const response = await client.chat.send({
            chatRequest: {
                model: model,
                messages: [
                    { role: 'system', content: "You are a former big shot founder from Silicon Valley. You should have two inputs from the user about the formulation of their startup that is there base idea which is a skeleton of your ideas something like Uber + Farming and their details which include theirm location and expected date till investment. Remember that this is just a small draft and the draft itself is used to formulate a bigger startup plan. Do not put anything technical like the tech stack or something like that. Do not put any messages in the response but just the draft one its own" },
                    { role: 'user', content: `Hi I'm forming my startup with this base idea: ${baseIdea}. And here are the extra details: ${details}` }
                ]
            }
        })

        return response?.choices[0].message.content
    } catch (e) {
        console.error(e)
        return "An error occured"
    }
}

export async function generatePlan(draft: string, stackDetails: string) {
    try {
        const response = await client.chat.send({
            chatRequest: {
                model: model,
                messages: [
                    { role: 'system', content: "You are a former big shot founder from Silicon Valley. Your job is to generate a full fledged startup plan from a draft which is written in Markdown or any other format. You should also be given the tech stack and any other technical details to aid you." },
                    { role: 'user', content: `Hi here is the draft for my startup idea: ${draft} and here are the technical details: ${stackDetails}` }
                ]
            }
        })

        return response?.choices[0].message.content
    } catch (e) {
        console.error(e)
        return "An error occured"
    }
}
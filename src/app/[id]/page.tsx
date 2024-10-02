/* eslint-disable @typescript-eslint/no-unused-vars */

import { apiKey } from "@/constant"
import type { Metadata } from 'next'

async function fetchVideo(id: string) {
    console.log(id)
    const url = new URL(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`)

    url.searchParams.set('maxResults', '20')
    url.searchParams.set('part', 'snippet')
    url.searchParams.set('type', 'video')

    try {
        const video = await fetch(url)
        return video.json()
    } catch (error) {
        console.error(error)
    }
}

export async function generateMetadata(
    { params }: {params: {id: string}},
  ): Promise<Metadata> {
    // read route params
    const id = params.id
   
    // fetch data
    const video = await fetchVideo(id)
   
    return {
      title: video.items[0].snippet.title,
    }
  }
   
export default async function VideoDetail({params}:{params:{id:string}}){
    const video = await fetchVideo(params.id)
    const videoSrc = `https://www.youtube.com/embed/${params.id}`
    return <div className="px-8 grid grid-cols-10 gap-4">
        <div className="col-span-10">
            <div className="w-full items-center">
                <iframe src= {videoSrc} className="w-[100%] h-[35rem] rounded-md"/>
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-lg">{video.items[0].snippet.title}</h1>
                <h5 className="font-bold text-sm">{video.items[0].snippet.channelTitle}</h5>
                <p className="text-md text-slate-400">{video.items[0].snippet.description}</p>
            </div>
        </div>
    </div>
}
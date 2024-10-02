/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
// import Image from "next/image"
import Link from "next/link"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function VideoItem({ video }: { video: any }) {
    return <Card>
        <CardContent>
            <Link href={`/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.high.url}  className="rounded-t-lg"/>
            </Link>
        </CardContent>
        <CardFooter className="overflow-hidden">
            <div className="flex flex-col gap-1">
                <Link href={`/${video.id.videoId}`}>
                    <h1 className="font-bold text-lg hover:text-blue-500 ">{video.snippet.title.slice(0, 20)}...</h1>
                </Link>
                <h2 className="font-bold text-sm">{video.snippet.channelTitle.slice(0, 20)}...</h2>
            </div>
        </CardFooter>
    </Card>

}
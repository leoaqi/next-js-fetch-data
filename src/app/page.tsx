import { SearchInput } from "@/components/search-input";
import VideoList from "@/components/videos/video-list";
import { apiKey } from "@/constant";

async function fetchVideos(query: string) {
    console.log(query)
    const url = new URL(`https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`)

    url.searchParams.set('maxResults', '20')
    url.searchParams.set('part', 'snippet')
    url.searchParams.set('type', 'video')

    try {
        const videos = await fetch(url)
        return videos.json()
    } catch (error) {
        console.error(error)
    }
}
export default async function Videos({searchParams}:{searchParams:{[key: string]:string}}) {
    console.log(searchParams.query)
    const videos = await fetchVideos(searchParams.query)
    console.log(videos)
    return (
        <div>
            <div className="w-[50%]">
                <SearchInput />
            </div>
            <div className="mt-8">
                <VideoList videos={videos}/>
            </div>
        </div>
    )
}
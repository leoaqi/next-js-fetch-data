/* eslint-disable @typescript-eslint/no-explicit-any */
import VideoItem from "./video-item"

export default function VideoList({ videos }: { videos: any }) {
    // Handle cases where videos or videos.items might be undefined/null
    if (!videos || !videos.items) {
        console.log("No videos available");
        return <div>No videos available</div>;
    }

    console.log(videos.items);

    return (
        <div className="grid grid-cols-5 gap-4">
            {videos.items.map((video: any) => (
                <div key={video.id.videoId}>
                    <VideoItem video={video} />
                </div>
            ))}
        </div>
    );
}
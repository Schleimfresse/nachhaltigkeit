import {BlogPosts} from 'app/components/posts'
import {CustomMDX} from "./components/mdx";
import {baseUrl} from "./sitemap";
import {formatDate, getBlogPosts} from "./blog/utils";

export default function Page() {
    let post = getBlogPosts().find((post) => post.slug === "short")

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Vision für ein Witrschaftssystem - lange Version
            </h1>
            <p className="mb-4">
                {`Die Ausführungen zu der Vision eines neuen Wirtschaftssystem sind in zwei Ausführungen verfügbar. EIne gekürzte Version und eine erweiterte Version .`}
            </p>

            <div className="my-8">
                <BlogPosts/>
            </div>

        </section>
    )
}

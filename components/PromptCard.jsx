"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
    const [copied, setCopied] = useState("");

    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(""), 3000);
    }

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-52">
                {/* User Image */}
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image
                        alt="user_image"
                        src={post.creator.image}
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />

                    {/* Username & Email */}
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
                        <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
                    </div>
                </div>

                {/* Copy Button */}
                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        alt="copy icon"
                        src={copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
                        width={12}
                        height={12}
                    />
                </div>
            </div>

            {/* Prompt */}
            <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>

            {/* Tag */}
            <p
                className="font-inter text-sm blue_gradient cursor-pointer"
                onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
                {post.tag}
            </p>
        </div>
    )
}

export default PromptCard
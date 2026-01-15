"use client";

import dynamic from "next/dynamic";

const PriorityTiles = dynamic(() => import("@/components/PriorityTiles"), {
    ssr: false,
});

export default function PlanSectionClient() {
    return <PriorityTiles />;
}

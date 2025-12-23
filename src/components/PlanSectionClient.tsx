"use client";

import dynamic from "next/dynamic";

const TenPointPlan = dynamic(() => import("@/components/TenPointPlan"), {
    ssr: false,
});

export default function PlanSectionClient() {
    return <TenPointPlan />;
}

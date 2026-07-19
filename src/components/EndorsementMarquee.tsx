import Image from "next/image";
import styles from "./EndorsementMarquee.module.css";

const endorsements = [
    {
        src: "/img/endorsements/DVCF.webp",
        alt: "Democratic Veterans Caucus of Florida",
        href: "https://demvetsfl.org/",
    },
    {
        src: "/img/endorsements/Palm-Beach-AFL-CIO.webp",
        alt: "Palm Beach-Treasure Coast, AFL-CIO",
        href: "https://pbtcaflcio.org/",
    },
    {
        src: "/img/endorsements/PBCCTA.png",
        alt: "Palm Beach County Classroom Teachers Association",
        href: "https://www.palmbeachcountycta.org/",
    },
    {
        src: "/img/endorsements/SEIU.png",
        alt: "SEIU Florida Public Services Union",
        href: "https://www.seiufpsu.org/",
    },
    {
        src: "/img/endorsements/VoteVets-logo+(navy).webp",
        alt: "VoteVets",
        href: "https://votevets.org/",
    },
];

export default function EndorsementMarquee() {
    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {[...endorsements, ...endorsements].map((endorsement, index) => (
                    <div className={styles.item} key={index}>
                        <a
                            href={endorsement.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${endorsement.alt}`}
                            tabIndex={index >= endorsements.length ? -1 : 0}
                        >
                            <Image
                                src={endorsement.src}
                                alt={index < endorsements.length ? endorsement.alt : ""}
                                width={180}
                                height={100}
                                className={styles.badge}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-black/10 bg-white">
            <div className="mx-auto max-w-6xl px-4 pt-10 pb-36 text-center text-sm text-black/70 md:py-10">
                <div className="mt-2">
                    © {year} Paid for by Rudolph Tinker, Democrat Candidate for <br className="hidden sm:block" />
                    Palm Beach County Commissioner, District 6.
                </div>
            </div>
        </footer>
    );
}

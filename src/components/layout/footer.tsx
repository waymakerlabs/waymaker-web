import packageJson from "../../../package.json"

export function Footer() {
    return (
        <footer className="border-t py-8">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} WayMaker. All rights reserved.</p>
                <p>v{packageJson.version}</p>
            </div>
        </footer>
    )
}

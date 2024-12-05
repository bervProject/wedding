import Timer from "./Timer";

export default function DateDetails() {
    return (
        <section className="hero is-light is-halfheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="subtitle">Undangan & Acara</p>
                    <p className="title">Sabtu, 18 Januari 2025</p>
                    <div className="columns">
                        <div className="column">
                            <div className="content">
                                <p className="subtitle">
                                    Pemberkatan
                                </p>
                                <p>16:30-18:00</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="content">
                                <p className="subtitle">
                                    Resepsi
                                </p>
                                <p>18:00-selesai</p>
                            </div>
                        </div>
                    </div>
                    {/* Timer */}
                    <Timer />
                </div>
            </div>
        </section>
    )
}
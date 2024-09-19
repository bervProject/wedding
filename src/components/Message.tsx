export default function Message() {
    return (<section className="hero is-info is-halfheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <p className="title">Kirim Pesan</p>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Nama</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <input className="input" type="text" placeholder="Nama" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-label is-normal">
                                    <label className="label">Pesan</label>
                                </div>
                                <div className="field-body">
                                    <div className="field">
                                        <p className="control">
                                            <textarea className="textarea" placeholder="Pesan" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="field is-horizontal">
                                <div className="field-body">
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-link">Kirim</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
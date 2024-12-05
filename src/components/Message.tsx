import { useState } from 'react';
import { sendMessage } from "../services/weddings";


export default function Message() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function submit(e: any) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        sendMessage(name, message)
         .then((data) => {
            if (!data) {
                alert(data);
                return;
            }
            alert('Terkirim!');
            setName('');
            setMessage('');
         }).catch(err => {
            console.error(err);
         });
    }


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
                                                <input name="name" className="input" type="text" placeholder="Nama"
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    />
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
                                                <textarea name="message" className="textarea" placeholder="Pesan" 
                                                    value={message}
                                                    onChange={e => setMessage(e.target.value)}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="field is-horizontal">
                                    <div className="field-body">
                                        <div className="field">
                                            <div className="control">
                                                <button className="button is-link" onClick={submit}>Kirim</button>
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
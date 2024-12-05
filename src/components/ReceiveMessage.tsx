import { useEffect, useRef, useState } from "react";
import { getMessages } from "../services/weddings";

export default function ReceiveMessage() {
    const [result, setResult] = useState<any[]>([]);
    const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);


    useEffect(() => {

        intervalRef.current = setInterval(async () => {

            getMessages().then(results => {
                setResult(results)
            }).catch((error: any) => {
                console.error('Error while fetching Wedding', error);
            });

        }, 30000);

        return () => {
            clearInterval(intervalRef.current as NodeJS.Timeout);
        }

    }, [])
    return (<section className="hero is-light is-halfheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h2 className="title">Pesan-Pesan</h2>
                {result.map((item) => <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="subtitle has-text-grey is-4">{item.From}</p>
                            </div>
                        </div>

                        <div className="content">
                            {item.Message}
                            <br />
                            <time dateTime={item.createdAt}>{new Date(item.createdAt).toDateString()}</time>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    </section>)
}
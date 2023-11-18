import { Link } from 'react-router-dom';

const Att1Item = ({data, defaultData}) =>{
    return(
        <div className='container pb-1'>
            <Link to={`/umowapdf/${data.id}`}>
                <div className={`border border-black ${data.status === 'accepted' ? 'acceptedbg' : data.status === 'denied' ? 'deniedbg' : data.status === 'pending' ? 'pendingbg' : ''}`}>
                {data.start_praktyk !== (defaultData && defaultData.start_praktyk) ?
                    <p className="text-dark link-underline link-underline-opacity-0 pt-3">Unusual data</p> :
                    <p className="text-dark pt-3">{data.nr_albumu}</p>
                }
                </div>
            </Link>
        </div>
    )
}
export default Att1Item;
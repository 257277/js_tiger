import styles from "../styles/allVendor.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
export default function Page() {
    const router = useRouter();
    let [page, setpage] = useState(0);
    let [dt, setdt] = useState([])

    useEffect(() => {

        axios.get(`https://creepy-crow-battledress.cyclic.app/vendor/allvendor/${page}`).then((res) => {

            setdt(res.data.data);
        })

    }, [page])

    return (
        <div>
            <h1 onClick={() => {
                router.push('/addVendor');
            }} className={styles.pth}>Add Vendors</h1>
            <h1 className={styles.heading}>All Vendors</h1>
            <div className="sectionContainer">
                {/* Map the below the div against your books data */
                    dt.map((item, i) => {
                        return (<div className={styles.vendorCard} key={i} >
                            <h5 className={styles.vendor_name} > Vendor Name:{item.vendor_name}  </h5>
                            <p className={styles.bank_number} > Bank Account Number: {item.bank_account_no}</p>
                            <p className={styles.bank_name} > Bank Name:{item.bank_name}</p>
                            <p className={styles.addressfirst} > Address Line 1:{item.address_line1}</p>
                            <p className={styles.addressSecond} > Address Line 2:{item.address_line2}</p>
                            <p className={styles.city} > Address Line 2:{item.city}</p>
                            <p className={styles.country} > City:{item.country}</p>
                            <p className={styles.country} > Zip Code:{item.zip_code}</p>
                            <button className={styles.ebtn} id={item._id} onClick={(event) => {
                                let id = event.target.id;
                                localStorage.setItem("id", id);
                                router.push('/edit');
                            }}>Edit</button>
                            <button className={styles.dbtn} id={item._id} onClick={(event) => {
                                let id = event.target.id;
                                axios.delete(`https://creepy-crow-battledress.cyclic.app/vendor/deletevendor/${id}`).then((res) => {
                                    alert(res.data);

                                })
                            }}>Delete</button>
                        </div>)

                    })
                }
            </div>
            <button className={styles.prevbtn} onClick={() => {
                if (page >= 1) {
                    setpage(page - 1);
                }
            }}>Previous</button>
            <button className={styles.nextbtn} onClick={() => {

                setpage(page + 1);
            }}>Next</button>
            {/* <div className={styles.pagination}></div> */}
        </div>
    )


}
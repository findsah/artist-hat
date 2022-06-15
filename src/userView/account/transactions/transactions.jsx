import React, { useState } from 'react';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import Pagination from 'react-responsive-pagination';
import './transactions.css'

const Transactions = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = 2;

    return (
        <>
            <div className='pb-4'><h2 className='h1_heading'>TAX INFO</h2></div>
            <div className='transactionHistory-sec container pt-2 pb-5'>
                {currentPage === 1 ? (
                    <div className='row transactionHistory-row'>
                        <div className="download-section p-0 mb-4">
                                <div className='d-flex'>
                                    <div className="download-icon"><RiDownloadCloud2Line /></div>
                                    <div className="download-transaction-history pr-2"><p>Download Transaction History</p></div>
                            </div>

                        </div>
                        <div className='taxInfo-description-div'>
                            <div className='row justify-content-between'>
                                <div className="col-6">
                                    <div>
                                        <h2 className='h2-heading'>PAINTING ART IN TORONTO</h2>
                                        <h4 className='h4-heading'>Client: JENNIER F</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$31.00/hr * 2 hrs</h4>
                                        <h4 className='h4-heading'>Tip:</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>Total</h4>
                                        <h4 className='h1-heading'>Disbursed To Bank</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ marginBottom: '4.5rem' }}>
                                        <h4 className='h4-heading'>OCT.22, 2020</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$50.00</h4>
                                        <h4 className='h4-heading'>$18,24</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>$68.24</h4>
                                        <h4 className='h1-heading'>$68.24</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-between report-second-row py-3'>
                                <div className="col-6">
                                    <div>
                                        <h2 className='h2-heading'>PAINTING ART IN TORONTO</h2>
                                        <h4 className='h4-heading'>Client: JENNIER F</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$31.00/hr * 2 hrs</h4>
                                        <h4 className='h4-heading'>Tip:</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>Total</h4>
                                        <h4 className='h1-heading'>Disbursed To Bank</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ marginBottom: '4.5rem' }}>
                                        <h4 className='h4-heading'>OCT.22, 2020</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$50.00</h4>
                                        <h4 className='h4-heading'>$18,24</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>$68.24</h4>
                                        <h4 className='h1-heading'>$68.24</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-between report-third-row py-3'>
                                <div className="col-6">
                                    <div>
                                        <h2 className='h2-heading'>PAINTING ART IN TORONTO</h2>
                                        <h4 className='h4-heading'>Client: JENNIER F</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$31.00/hr * 2 hrs</h4>
                                        <h4 className='h4-heading'>Tip:</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>Total</h4>
                                        <h4 className='h1-heading'>Disbursed To Bank</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ marginBottom: '4.5rem' }}>
                                        <h4 className='h4-heading'>OCT.22, 2020</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$50.00</h4>
                                        <h4 className='h4-heading'>$18,24</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>$68.24</h4>
                                        <h4 className='h1-heading'>$68.24</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : ''}
                {currentPage === 2 ? (
                    <div className='row justify-content-end'>
                        <div className='col-12 col-lg-10 taxInfo-description-div'>
                            <div className='row justify-content-between'>
                                <div className="col-6">
                                    <div>
                                        <h2 className='h2-heading'>PAINTING ART IN TORONTO</h2>
                                        <h4 className='h4-heading'>Client: JENNIER F</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$31.00/hr * 2 hrs</h4>
                                        <h4 className='h4-heading'>Tip:</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>Total</h4>
                                        <h4 className='h1-heading'>Disbursed To Bank</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ marginBottom: '4.5rem' }}>
                                        <h4 className='h4-heading'>OCT.22, 2020</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$50.00</h4>
                                        <h4 className='h4-heading'>$18,24</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>$68.24</h4>
                                        <h4 className='h1-heading'>$68.24</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-between report-second-row py-3'>
                                <div className="col-6">
                                    <div>
                                        <h2 className='h2-heading'>PAINTING ART IN TORONTO</h2>
                                        <h4 className='h4-heading'>Client: JENNIER F</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$31.00/hr * 2 hrs</h4>
                                        <h4 className='h4-heading'>Tip:</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>Total</h4>
                                        <h4 className='h1-heading'>Disbursed To Bank</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ marginBottom: '4.5rem' }}>
                                        <h4 className='h4-heading'>OCT.22, 2020</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$50.00</h4>
                                        <h4 className='h4-heading'>$18,24</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>$68.24</h4>
                                        <h4 className='h1-heading'>$68.24</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='row justify-content-between report-third-row py-3'>
                                <div className="col-6">
                                    <div>
                                        <h2 className='h2-heading'>PAINTING ART IN TORONTO</h2>
                                        <h4 className='h4-heading'>Client: JENNIER F</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$31.00/hr * 2 hrs</h4>
                                        <h4 className='h4-heading'>Tip:</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>Total</h4>
                                        <h4 className='h1-heading'>Disbursed To Bank</h4>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div style={{ marginBottom: '4.5rem' }}>
                                        <h4 className='h4-heading'>OCT.22, 2020</h4>
                                    </div>
                                    <div className='my-5'>
                                        <h4 className='h4-heading'>$50.00</h4>
                                        <h4 className='h4-heading'>$18,24</h4>
                                    </div>
                                    <div className='mt-5'>
                                        <h4 className='h1-heading'>$68.24</h4>
                                        <h4 className='h1-heading'>$68.24</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : ''}
                {currentPage === 3 ? (
                    'this is third page'
                ) : ''}
                {currentPage === 4 ? (
                    'this is four page'
                ) : ''}
                {currentPage === 5 ? (
                    'this is fifth page'
                ) : ''}
                <div className='mt-5'>
                    <Pagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>

            </div>
        </>
    )
}

export default Transactions

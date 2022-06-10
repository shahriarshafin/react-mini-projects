import { ethers } from 'ethers';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EtherCard from '../components/EtherCard';

export default function Home() {
	const [meta, setMeta] = useState('Check MetaMask');
	const [acBalance, setAcBalance] = useState('0.00');
	const [acNo, setAcNo] = useState(
		'*******************************************'
	);

	const connectClicked = async () => {
		if (typeof window.ethereum !== 'undefined') {
			setMeta('MetaMask is installed!');
			toast('MetaMask is installed!');
		} else {
			setMeta('MetaMask is not installed!');
		}

		const accounts = await ethereum.request({
			method: 'eth_requestAccounts',
		});
		const account = accounts[0];

		console.log(account);
		setAcNo(
			account.slice(0, 6) +
				'****************' +
				account.slice(account.length - 17, account.length)
		);
		// get ether balance
		const balance = await ethereum.request({
			method: 'eth_getBalance',
			params: [account, 'latest'],
		});
		setAcBalance(ethers.utils.formatEther(balance));
	};

	return (
		<div className='container mx-auto'>
			<div className='flex flex-col break-words bg-white border-2 rounded mb-20'>
				<div className='font-semibold bg-gray-200 text-gray-700 py-3 px-6 mb-0'>
					<h1 className='text-center'>Welcome to the Ethereum Wallet</h1>
				</div>
				<div className='w-full flex justify-center my-2'>
					<button
						onClick={connectClicked}
						className=' text-xl shadow-lg px-3 py-1 bg-slate-300 rounded-sm mx-auto hover:bg-slate-400'
					>
						Connect
					</button>
				</div>
			</div>
			<EtherCard acNo={acNo} acBalance={acBalance} />

			<ToastContainer />

			<div className='flex justify-center mt-20'></div>
		</div>
	);
}

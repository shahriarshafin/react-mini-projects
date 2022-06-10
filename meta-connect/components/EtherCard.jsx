import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import 'react-toastify/dist/ReactToastify.css';
import Eth from '../assets/images/eth.png';

const EtherCard = ({ acNo, acBalance }) => {
	return (
		<>
			<div className='egg'></div>
			<div className='flip-card flex flex-col items-center justify-center flex-auto flex-shrink-0'>
				<div className='flip-card-inner shadow-gray-600 shadow-2xl relative h-56 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg w-96 overflow-hidden cursor-pointer'>
					<div className='flip-card-front shadow-md w-full px-2 text-gray-200 flex items-center justify-between'>
						<div className='ml-3'>
							<span className='font-semibold text-xl uppercase'>
								Ethereum Card
							</span>
							<br />
							<span>ETH {acBalance}</span>
						</div>
						<Image
							className='select-none'
							width={100}
							height={100}
							src={Eth}
							alt='ether'
						/>
					</div>

					<QRCodeSVG
						className='z-10 p-8 bottom-0 absolute right-0'
						value={acNo}
						onClick={() => {
							navigator.clipboard.writeText(acNo);
						}}
					/>
					<div className='w-full px-3 py-2.5 bg-slate-900 mb-4 absolute bottom-3 text-white font-semibold text-sm'>
						<span>{acNo}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default EtherCard;

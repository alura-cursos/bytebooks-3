import { MdOutlineShoppingBag } from 'react-icons/md';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/reducers/cart';

import Cart from '../Cart';
import { useHistory } from 'react-router-dom';
const Header: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useHistory();
	const { isCartOpen } = useSelector((state: RootState) => state.cart);
	return (
		<>
			<div className='flex items-center bg-white h-20 px-10 w-full py-[18px] justify-between'>
				<img
					alt='ByteBooks Logo'
					src='./logo.webp'
					className='cursor-pointer hover:opacity-80'
					height={70}
					onClick={() => navigate.push('/')}
				/>
				<div
					className='flex items-center hover:opacity-80 cursor-pointer'
					onClick={() => dispatch(setIsCartOpen(true))}
				>
					<MdOutlineShoppingBag className='h-9 w-9 text-[#002F52]' />
					<div className='text-[#221F20] text-lg font-bold pt-2 pl-1 hidden md:block'>Sacola</div>
				</div>
			</div>
			{isCartOpen && <Cart onClose={() => dispatch(setIsCartOpen(false))} />}
		</>
	);
};

export default Header;

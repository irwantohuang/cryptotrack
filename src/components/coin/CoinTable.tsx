/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronDown, ChevronsUpDown, ChevronUp } from 'lucide-react'
import { ReactNode } from 'react'
import { CoinHeaderType } from '../../data/coinHeaders'
import Button from '../elements/Button'
import { CoinType } from '../../types/Coins'
import { formatPrice } from '../../utils/utility'
import Sparkline from '../elements/chart/Sparkline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import Image from '../elements/Image'

interface CoinTableProps {
    children: ReactNode,
    aos?: string,
    aosDelay?: string
}

const CoinTable = ({ children, aos = 'fade-left', aosDelay = '100' }: CoinTableProps) => {
    return (
        <table
            data-aos={aos}
            data-aos-delay={aosDelay}
            className='min-w-full bg-primary-black border-collapse table-auto'>
            {children}
        </table>
    )
}

interface TableHeadProps {
    headers: CoinHeaderType[]
    onClick?: (e: string) => void;
    sortOrder?: string | null
    sortColumn?: string | null
}


const TableHead = ({ headers, onClick, sortOrder, sortColumn }: TableHeadProps) => {
    return (
        <thead className='bg-primary sticky inset-0 z-10'>
            <tr>
                {headers.map((header, index) => (
                    <th key={index} className={`whitespace-nowrap px-6 py-2 font-semibold capitalize cursor-pointer text-primary-white-200/95 hover:text-primary-white  ${header.id === 'name' && 'sticky top-0 left-0 z-30  bg-primary'}`}
                        onClick={header.sortable ? () => onClick?.(header.id) : undefined}
                    >
                        <div className='flex items-center gap-1' style={{ justifyContent: header.align }}>
                            {header.sortable && header.name !== "#" ?
                                <>
                                    <Button onClick={() => onClick?.(header.id)} className='bg-transparent hover:bg-transparent p-0'>
                                        {sortOrder === 'asc' && sortColumn === header.id ?
                                            <ChevronUp /> :
                                            sortOrder === 'desc' && sortColumn === header.id ?
                                                <ChevronDown /> :
                                                <ChevronsUpDown />
                                        }
                                    </Button>
                                    {header.name}
                                </>
                                :
                                header.name
                            }
                        </div>
                    </th>
                ))}
            </tr>


        </thead>
    )
}

interface TableBodyProps {
    coins: CoinType[],
    headers: CoinHeaderType[]

}


const TableBody = ({ coins, headers }: TableBodyProps) => {

    const { error } = useSelector((state: RootState) => state.coin);

    if (coins.length === 0) return null;

    return (
        <tbody>
            {coins.length <= 1 || error ? <tr>
                <td colSpan={headers.length} className='w-full text-center py-2'>No Data Found</td>
            </tr> : (
                coins.map((row, index) => (
                    <tr key={index} className='hover:bg-primary-black-200 group'>
                        {headers.map((header, colIndex) => (
                            <td key={colIndex} className={`py-2 border-b border-b-primary-white/15 whitespace-nowrap 
                                ${header.id === 'name' ? 'sticky px-4 whitespace-nowrap left-0 bg-primary-black-300 group-hover:bg-primary-black-200' : 'px-6'}
                                ${header.id === 'change' ? (Number(row.change) < 0 ? 'text-red-500' : 'text-green-500') : ''}`}
                                style={{ textAlign: header.align }}
                            >
                                {header.id === 'name' ? (
                                    <Link to={`/cryptocurrencies/${row.uuid}`}>
                                        {mapCellValue(header.id, row[header.id], row)}
                                    </Link>
                                ) : (
                                    mapCellValue(header.id, row[header.id], row)
                                )}
                            </td>
                        ))}
                    </tr>
                ))
            )}
        </tbody>
    )
}

const mapCellValue = (headerId: keyof CoinType, value: any, row: CoinType) => {
    switch (headerId) {
        case "price":
        case "marketCap":
        case "24hVolume":
            return `$ ${formatPrice(value, 2)}`
        case "change":
            return `${value} %`
        case "sparkline":
            return <DataSparkline sparkline={value} />
        case "name":
            return <DataName {...row} />;
        default:
            return value ?? '-'
    }
}

const DataSparkline = ({ sparkline }: { sparkline: string[] }) => {
    return (
        <div className="flex items-center justify-center max-h-[30px] max-w-[100px] mx-auto">
            <Sparkline data={sparkline.map(value => parseFloat(value))} />
        </div>
    )
}

const DataName = ({ iconUrl, name, symbol }: CoinType) => {
    return (
        <div className="flex items-center justify-start gap-2 w-full px-2 bg-red-200">
            <Image className='w-6 h-6' variant={"profile"} src={iconUrl} alt={name} />
            {/* <span className="me-4 text-primary-white text-ellipsis group-hover:text-accent font-medium font-secondary">{name}
                <span className="text-primary-white-200 text-ellipsis group-hover:text-primary-white"> ({symbol})</span>
            </span> */}
            <div className='flex items-center w-full gap-1'>
                <p className='hidden md:inline-block group-hover:text-accent font-medium font-secondary'>{name}</p>
                <p className='inline-block font-medium text-primary-white-200 group-hover:text-primary-white'>({symbol})</p>
            </div>
        </div>
    )
}


CoinTable.TableHead = TableHead;
CoinTable.TableBody = TableBody;



export default CoinTable
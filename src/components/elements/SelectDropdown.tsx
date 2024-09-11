
interface SelectDropdownProps {
    data: string[],
    selected: string,
    onSelect: (e: string) => void
}

const SelectDropdown = ({data, selected, onSelect}: SelectDropdownProps) => {
    return (
        <div className='relative block lg:inline-block w-full mb-4'>
            <label htmlFor="dropdown" className="text-sm font-medium font-secondary text-primary-white-200/75">Select Time Period: </label>
            <select 
                onChange={(e) => onSelect(e.target.value)}
                value={selected}
                className="block lg:inline-block appearance-none mt-1 lg:ms-4 w-full px-4 py-1.5 lg:max-w-48 text-base bg-primary-black-300 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-primary"
                name="dropdown"
                id="dropdown">
                    {data.map((d, index) => (
                        <option key={index} value={d}>
                            {d}
                        </option>
                    ))}
            </select>
        </div>
    )
}

export default SelectDropdown
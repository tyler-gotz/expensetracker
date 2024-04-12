import React from 'react'

type TransactionListProps = {
    data: { id: number; name: string, value: number }[]
}

const TransactionList: React.FC<TransactionListProps> = ({ data }) => {
    return (
        <div className="space-y-4">
            {
                data.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center border border-primary-foreground rounded p-3">
                        <div>
                            {item.name} <span className='text-sm text-muted-foreground ml-3'>Category</span>
                        </div>
                        <div className="ml-auto font-medium">${item.value}</div>
                    </div>
                ))
            }
        </div>

    )
}

export default TransactionList
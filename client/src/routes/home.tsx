import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Banknote, HandCoins } from 'lucide-react'
import Overview from '@/components/overview';
import TransactionList from '@/components/transaction-list';

const data = [
    { id: 1, name: 'Group A', value: 400 },
    { id: 2, name: 'Group B', value: 300 },
    { id: 3, name: 'Group C', value: 300 },
    { id: 4, name: 'Group D', value: 21 },
    { id: 5, name: 'Group E', value: 21 },
    { id: 6, name: 'Group F', value: 21 },
];

const Home = () => {

    return (
        <div className='px-4'>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Balance
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-primary">
                            Salary
                        </CardTitle>
                        <HandCoins className='h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$34,334</div>
                        <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-destructive">Expenses</CardTitle>
                        <Banknote className='h-5 w-5 text-muted-foreground' />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 pt-3">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Expense Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Overview data={data} />

                    </CardContent>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Recent Transactions</CardTitle>
                        <CardDescription>
                            You made 265 transactions this month.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TransactionList data={data} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Home
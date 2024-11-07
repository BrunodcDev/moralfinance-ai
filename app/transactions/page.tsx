import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { transactioncolumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";

const TransactionsPage = async () => {
    const transactions = await db.transaction.findMany({})
    return (
        <div>
            {/* TÍTULO E BOTÃO */}
            <div className="flex w-full items-center justify-between p-6">
                <h1 className="text-2x1 font-bold">Transações</h1>
                <Button className="rounded-full">
                    Adicionar transação
                    <ArrowDownUpIcon />
                </Button>
            </div>
            <DataTable columns={transactioncolumns} data={transactions}/>
        </div>
    );
};

export default TransactionsPage;
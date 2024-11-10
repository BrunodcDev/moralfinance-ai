import { db } from "../_lib/prisma";
import { transactioncolumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const TransactionsPage = async () => {
  const {userId} = await auth()
  if (!userId) {
    return redirect('/login')
  }
  const transactions = await db.transaction.findMany({
    where: {
      userId,
    }
  });
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2x1 font-bold">Transações</h1>
        <AddTransactionButton />
      </div>
      <DataTable columns={transactioncolumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;

import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import { getDashboard } from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import AiReportButton from "./_components/ai-report-button";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const monthIsInvalid = !month || !isMatch(month, "MM");
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`);
  }
  const dashboard = await getDashboard(month);
  const userCanAddTransaction = await canUserAddTransaction();
  const user = await clerkClient().users.getUser(userId);
  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col space-y-4 sm:space-y-6 overflow-hidden pt-6">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <h1 className="text-xl sm:text-2xl font-bold">Dashboard</h1>
              <AiReportButton
                  month={month}
                  hasPremiumPlan={
                      user.publicMetadata.subscriptionPlan === "premium"
                  }
              />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:items-center">
                <TimeSelect />
            </div>
        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid h-full grid-cols-1 gap-4 sm:gap-6 overflow-hidden">
            {/* COLUNA PRINCIPAL */}
            <div className="flex flex-col gap-4 sm:gap-6 overflow-hidden">
                <SummaryCards
                    month={month}
                    {...dashboard}
                    userCanAddTransaction={userCanAddTransaction}
                />
                <div className="grid grid-cols-1 gap-4 sm:gap-6 overflow-hidden lg:grid-cols-3 items-center">
                    <TransactionsPieChart {...dashboard} />
                    <ExpensesPerCategory
                        expensesPerCategory={dashboard.totalExpensePerCategory}
                    />
                </div>
            </div>

            {/* COLUNA SECUNDÁRIA */}
            <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
);

};

export default Home;
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react";
import SummaryCard from "./summary-card";

const SummaryCards = () => {
    return ( 
        <div className="space-y-6">
            {/* PRIMEIRO CARD */}
            <Card>
                <CardHeader>
                    <WalletIcon size={16} />
                    <p className="text-white opacity-70">Saldo</p>
                </CardHeader>
                <CardContent>
                    <p className="text-4x1 font-bold">R$5.000,00</p>
                </CardContent>
            </Card>
            {/* OUTROS CARDS */}
            <div className="grid grid-cols-3">
            <SummaryCard icon={<PiggyBankIcon size={14} />}
            title="Investimento"
            amount={2500}
            />
            <SummaryCard icon={<TrendingUpIcon size={14} />}
            title="Receita"
            amount={2500}
            />
            <SummaryCard icon={<TrendingDownIcon size={14} />}
            title="Despesas"
            amount={2500}
            />
            </div>
        </div>
     );
}
 
export default SummaryCards;
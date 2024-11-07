import { Badge } from "@/app/_components/ui/badge";
import { transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
    transaction: transaction
}

const TransactionTypeBadge = ({transaction}:TransactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        return (
        <Badge className="bg-green bg-opacity-10 text-green hover:bg-muted font-bold">
          <CircleIcon className="mr-2 fill-green" size={10}/>
          Depósito
        </Badge>
        );
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
        <Badge className="bg-danger bg-opacity-10 text-danger hover:bg-muted font-bold">
          <CircleIcon className="mr-2 fill-danger" size={10}/>
          Despesa
        </Badge>
        );
      }
      return (
        <Badge className="bg-branco bg-opacity-10 text-branco hover:bg-muted font-bold">
          <CircleIcon className="mr-2 fill-branco" size={10}/>
          Investimento
        </Badge>
      );
}
 
export default TransactionTypeBadge;
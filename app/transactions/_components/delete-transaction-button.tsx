import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { TrashIcon } from "lucide-react";
import { deleteTransaction } from "../_action/delete-transaction";
import { toast } from "sonner";

interface DeleteTransactionButtonProps {
    transactionId: string;
}


const DeleteTransactionButton = ({
    transactionId,
}:DeleteTransactionButtonProps) => {
    const handleConfirmDeleteClick = async () => {
        try {
            await deleteTransaction({transactionId})
            toast.success("transação Deletada com sucesso!")
        } catch (error) {
            console.error(error);
            toast.error("Erro ao deletar transação")
        }
    }
    return ( 
        <AlertDialog>
            <AlertDialogTrigger asChild>
            <Button variant="ghost" size="icon" className="text-muted-foreground">
                <TrashIcon />
            </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Você Realmente Deseja Deletar essa transação?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Essa ação nao pode ser desfeita.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={handleConfirmDeleteClick}>Continuar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
     );
}
 
export default DeleteTransactionButton;
import { Persona } from "./Persona";

export class Cliente extends Persona {
    private isVip: boolean = false;
    private cantVisitas: number = 1;
    private visitas: string [] = [];

    constructor(id: string, nombre: string, telefono: number, motivoVisita: string){
        super(id, nombre, telefono);
        this.visitas [0] = motivoVisita;
    }

    getClientStatus(): boolean {
        return this.isVip;
    }

    getCantVisitas(): number{
        return this.cantVisitas;
    }

    getVisitas(): string[] {
        return this.visitas;
    }

    addVisita(motivoVisita): void{
        this.visitas.push(motivoVisita);
    }

    private setVip(b: boolean): void {
        this.isVip = b;
    }

    addVisit(): void {
        this.cantVisitas++;
    }

    //metodo cancelar visita? objeto tipo visita con fecha hora motivo?

    checkClientStatus(): void { //Si ha hecho mas de 5 visitas, se convierte en VIP
        if (this.getCantVisitas() > 5){
            this.setVip(true);
        }
    }

   
}


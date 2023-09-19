import { inject } from "@angular/core"
import { UserService } from "../services/user.service"
import { Router } from "@angular/router"

export const authGuard = () => {
    const userService = inject(UserService)
    const router = inject(Router)

    if (userService.estaLogado()) {
        return true
    } else {
        router.navigate(['/login'])
        alert("Você precisa estar logado para acessar seu Perfil!")
        return false;
    }
}
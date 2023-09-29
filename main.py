print("Escribe la contraseña")
pwd= input()
print ("has escrito " + pwd)

contador = 3

while contador > 0:
    print("Te quedan " + contador + " intentos")
    if contador ==1:
        print("Te queda un intento")
    else:
        print(" Te quedan más de 2 intentos")
    contador = contador - 1

print("Has terminado")
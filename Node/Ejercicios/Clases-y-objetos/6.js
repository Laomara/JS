/**
 * 
 * Crea una clase que lamaremos Bus. Sus atributos serán:

* capacidad: número máximo de pasajeros             -> Number, int -> const
* pasajeros: número de pasajeros (inicialmente 0)   -> Number, int -> inicia a 0
* conductor: objeto conductor.                        -> Conductor es objeto de clase Conductor

Sus métodos (de Bus)

* subir(pasajeros): aumenta el numero de pasajeros      -> admite positivos
* bajar(pasajeros): disminuye el número de pasajeros    -> admite positivos y no pueden bajar más de los pasajeros actuales
* conductor: asigna un objeto conductor.                -> objeto Conductor

El objeto conductor es de una clase (Conductor) cuyos atributos son:

* nombre: nombre del conductor                      -> se pasa el param en creación del objeto
* licencia: un número que identifica al condcutor.  -> Number, int o podría ser String
Al crear el objeto se asigna también el conductor   -> no inicia vacío

Restricciones para que tenga sentido el ejercicio:
No pueden subir más pasajeros que los máximos admitidos y no pueden bajar más de los que hay.

 */

class Conductor{
    constructor(nombre_ = "Juan", licencia_ = 12345){
      this.nombre = nombre_
      this.licencia = licencia_
    }
    toString(){
      return this.nombre + ", " + this.licencia
      // Si queremos retornar el objeto "string-ificado":
      // return JSON.stringify(new Conductor(this.nombre, this.licencia))
    }
  }
  class Bus{
    constructor(capacidad_ = 40, pasajeros_ = 0, conductor_ = new Conductor()){
      this.capacidad = capacidad_ 
      this.pasajeros = pasajeros_ 
      this.conductor = conductor_
    }
    subir(pasajeros_){
      
      let pasajerosQueSuben = 0
      let maximoPuedenSubir = this.capacidad - this.pasajeros
  
      if(isNaN(pasajeros_) && !isFinite(pasajeros_)){
        // Este if nos pasa casos no válidos a un caso neutro: sumar cero
        pasajeros_ = 0
      }
      // No hemos verificado que no sea NaN
      if(pasajeros_ <= maximoPuedenSubir && pasajeros_ > 0){
        pasajerosQueSuben = pasajeros_
        this.pasajeros += pasajerosQueSuben
        return pasajerosQueSuben
      }else if(pasajeros_ > maximoPuedenSubir){
        pasajerosQueSuben = maximoPuedenSubir
        this.pasajeros += pasajerosQueSuben
        return pasajerosQueSuben
      }else{
        // Este es el caso de números negativos
        return 0
      }
    }
    bajar(pasajeros_){
  
    }
    cambiarConductor(nuevoConductor_){
  
    }
  }
// UNKNOWN TYPE
///////////////

// "unknown" type is a bite like "any" but it's not.
// any: you can use this value any way you want and you never get an error
// unknown: display an error and force the developer to add some extra checks on the value

function processAny(val: any) {
  val.log()
}

function processUnknown(val: unknown) {
  if(typeof val === 'object' && !!val && 'log' in val && typeof val.log === 'function') { // !!val: val is truthy
    val.log() // some checks
  }  
  
  val.log() // no check
}
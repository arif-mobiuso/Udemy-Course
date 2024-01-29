import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentValue: Float = 300;
  stable var startTime = Time.now(); 
  Debug.print(debug_show (currentValue));

  public func topUp(amount : Float) {
    currentValue += amount;
    Debug.print(debug_show (currentValue));
  };

  public func withdraw(amount : Float) {
    let tempValue : Float = currentValue - amount;
    if (tempValue >= 0) {

      currentValue -= amount;
      Debug.print(debug_show (currentValue));
    } else {
      Debug.print("No sufficient balance ! ");
    };
  };
  Debug.print("No sufficient balance ! ");

  public query func checkBalance() : async Float {
    return currentValue;
  };

  public func compound(){
    let currentTime = Time.now() ; 
    let elaspsedTimeNS = currentTime - startTime ;
    let elaspsedTimeS = elaspsedTimeNS / 1000000000 ; 
    currentValue := currentValue * ( 1.01 ** Float.fromInt(elaspsedTimeS)) ; 
    startTime := currentTime ;
  };

};

/**
* Happy King
* Author: Sam Creamer
*/

module.exports = class Property {
  /**
  * Id {int}
  * Name {string}
  * Cost {int} How many gold does it cost
  * Cost Multiplier {float}
  * description {string}
  * eligibility {int} How much gold do you need to earn before you are eglibigle to see this upgrade
  * count {int} How many of these are owned (maybe not the best structure for this type of variable)
  */
  constructor(id, name, cost, costMultiplier, workValue, description, count) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.costMultiplier = costMultiplier;
    this.workValue = workValue;
    this.description = description;
    this.count = count;
    /**
     * Set eligibility
     * @type {float}
     */
    this.eligibility = this.cost <= 100 ? 0 : this.cost * 0.7;
    /**
     * Boolean. true if this property is shown in the UI
     * @type {Boolean}
     */
    this.shown = false;
    /**
     * Boolean. true if ui is locked
     * @type {Boolean}
     */
    this.locked = false;
  }

  /**
   * Update the cost of this property
   */
  updateCost() {
    const newCost = parseInt(this.cost * this.costMultiplier);
    if (newCost === this.cost) {
      this.cost++;
    } else {
      this.cost = newCost;
    }
  }

};

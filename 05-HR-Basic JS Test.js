class User {
  constructor(userName) {
    this.userName = userName
  }

  getUsername() {
    return this.userName
  }

  setUsername(username) {
    this.userName = username
  }
}

class ChatUser extends User {
  constructor(userName) {
    super(userName)
    this.count = 0
  }

  giveWarning() {
    this.count += 1
  }

  getWarningCount() {
    return this.count
  }
}

// class Account {
//   constructor(balance) {
//     this.balance = balance
//   }

//   debit(amount) {
//     if (amount > this.balance) {
//       return false
//     } else {
//       this.balance -= amount
//       return true
//     }
//   }

//   getBalance() {
//     return this.balance
//   }

//   credit(amount) {
//     this.balance += amount
//   }
// }

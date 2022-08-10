package transaction

type Transaction interface {

	// Init this component.
	Init(metadata Metadata)

	// Begin a distribute transaction
	Begin(request BeginTransactionRequest) (*BeginResponse, error)

	// try to lock the transaction resource
	Try(tryRequest BunchTransactionTryRequest) error

	// Confirm a distribute transaction
	Confirm(confirmRequest BunchTransactionConfirmRequest) error

	// rooback a distribute transaction
	RollBack(rollBackRequest BunchTransactionRollBackRequest) error

	// get all bunch transaction state of the distribute transaction
	GetBunchTransactions(req GetBunchTransactionsRequest) (*TransactionStateResponse, error)

	ReleaseTransactionResource(request ReleaseTransactionRequest)
}

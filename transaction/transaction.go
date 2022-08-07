package transaction

type Transaction interface {

	// Init this component.
	Init(metadata Metadata)

	// Begin a distribute transaction
	Begin(request BeginTransactionRequest) (*BeginResponse, error)

	// try to lock the transaction resource
	Try(transactionId string, bunchTransactionId string, statusCode int, tryRequest TryTransactionRequest)

	// Confirm a distribute transaction
	Confirm()

	// rooback a distribute transaction
	RollBack()
}

/*
Copyright 2021 The Dapr Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package workflows

import "context"

// Workflow is an interface to perform operations on Workflow.
type Workflow interface {
	Init(metadata Metadata) error
	Start(ctx context.Context, req *StartRequest) (*WorkflowReference, error)
	Terminate(ctx context.Context, req *WorkflowReference) error
	Get(ctx context.Context, req *WorkflowReference) (*StateResponse, error)
}
